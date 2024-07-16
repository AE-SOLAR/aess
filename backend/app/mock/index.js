module.exports = (db, sequelize) => {
  const addPanelWithDetails = async (panelData) => {
    const transaction = await sequelize.transaction();

    try {
      const [series, createdSeries] = await db.series.findOrCreate({
        where: { name: panelData.techName },
        defaults: panelData.techName,
        transaction,
      });

      const [cellType, createdCellType] = await db.cellType.findOrCreate({
        where: { name: panelData.cellType },
        defaults: panelData.cellType,
        transaction,
      });

      const [moduleDesign, createdModuleDesign] =
        await db.moduleDesign.findOrCreate({
          where: { name: panelData.moduleDesign },
          defaults: panelData.moduleDesign,
          transaction,
        });

      const [moduleColor, createdModuleColor] = await db.color.findOrCreate({
        where: { name: panelData.moduleColor },
        defaults: panelData.moduleColor,
        transaction,
      });

      const [frameColor, createdFrameColor] = await db.color.findOrCreate({
        where: { name: panelData.frameColor },
        defaults: panelData.frameColor,
        transaction,
      });

      const [backCoverType, createdBackCoverType] =
        await db.backCoverType.findOrCreate({
          where: { name: panelData.backCover },
          defaults: panelData.backColor,
          transaction,
        });

      const panel = await db.panel.create(
        {
          ...panelData,
          series_id: series.id,
          cell_type_id: cellType.id,
          design_id: moduleDesign.id,
          module_color_id: moduleColor.id,
          frame_color_id: frameColor.id,
          back_cover_type_id: backCoverType.id,
        },
        { transaction }
      );
      for (const linkData of panelData.links) {
        const link = await db.link.create(linkData, { transaction });
        await db.linkPanel.create(
          { panel_id: panel.id, link_id: link.id },
          { transaction }
        );
      }
      await transaction.commit();

    } catch (error) {
      await transaction.rollback();
      console.error("Failed to create Panel with details: ", error);
    }
  };

  const createMockData = async () => {
    const { panels } = require("./panels.js");
    for (const techName in panels) {
      for (const panel of panels[techName].modules) {
        await addPanelWithDetails({
          ...panel,
          length: panel.moduleDimension.length,
          width: panel.moduleDimension.width,
          height: panel.moduleDimension.height,
        });
      }
    }
  };

  return createMockData;
};
