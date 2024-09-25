import json
import traceback

import models
from dotenv import load_dotenv
from models.database import session

load_dotenv()


def push_data():
    db = session()
    try:
        with open("mock/data.json") as f:
            data = json.load(f)
            for serie in data:
                serie_id = db.query(models.Series).filter_by(name=serie).first()
                if not serie_id:
                    db.add(models.Series(name=serie))
                    db.commit()
                    serie_id = db.query(models.Series).filter_by(name=serie).first()
                for module in data[serie]["modules"]:
                    cell_type_id = (
                        db.query(models.CellType)
                        .filter_by(name=module["cellType"])
                        .first()
                    )
                    if not cell_type_id:
                        db.add(models.CellType(name=module["cellType"]))
                        db.commit()
                        cell_type_id = (
                            db.query(models.CellType)
                            .filter_by(name=module["cellType"])
                            .first()
                        )

                    design_id = (
                        db.query(models.Design)
                        .filter_by(name=module["moduleDesign"])
                        .first()
                    )
                    if not design_id:
                        db.add(models.Design(name=module["moduleDesign"]))
                        db.commit()
                        design_id = (
                            db.query(models.Design)
                            .filter_by(name=module["moduleDesign"])
                            .first()
                        )

                    back_cover_type_id = (
                        db.query(models.BackCoverType)
                        .filter_by(name=module["backCover"])
                        .first()
                    )
                    if not back_cover_type_id:
                        db.add(models.BackCoverType(name=module["backCover"]))
                        db.commit()
                        back_cover_type_id = (
                            db.query(models.BackCoverType)
                            .filter_by(name=module["backCover"])
                            .first()
                        )

                    module_color_id = (
                        db.query(models.Color)
                        .filter_by(name=module["moduleColor"])
                        .first()
                    )
                    if not module_color_id:
                        db.add(models.Color(name=module["moduleColor"]))
                        db.commit()
                        module_color_id = (
                            db.query(models.Color)
                            .filter_by(name=module["moduleColor"])
                            .first()
                        )

                    frame_color_id = (
                        db.query(models.Color)
                        .filter_by(name=module["frameColor"])
                        .first()
                    )
                    if not frame_color_id:
                        db.add(models.Color(name=module["frameColor"]))
                        db.commit()
                        frame_color_id = (
                            db.query(models.Color)
                            .filter_by(name=module["frameColor"])
                            .first()
                        )

                    panel = (
                        db.query(models.Panel).filter_by(model=module["model"]).first()
                    )
                    if not panel:
                        files = {}
                        for el in module["links"]:
                            if not el["link"]:
                                continue
                            if el["tooltip"] not in files:
                                files[el["tooltip"].lower()] = []
                            files[el["tooltip"].lower()].append(
                                {
                                    "url": el["link"],
                                    "title": el["tooltip"],
                                    "icon": el["icon"],
                                }
                            )
                        singularity = {
                            "advantages": [],
                            "features": [],
                            "applications": [module.get("applications")],
                        }

                        panel = models.Panel(
                            **{
                                "series": serie_id,
                                "cell_type": cell_type_id,
                                "design": design_id,
                                "back_cover_type": back_cover_type_id,
                                "module_color": module_color_id,
                                "frame_color": frame_color_id,
                                "model": module["model"],
                                "min_power": module["powerRange"].split("-")[0],
                                "max_power": module["powerRange"].split("-")[1],
                                "singularity": singularity,
                                "length": module["moduleDimension"]["length"],
                                "width": module["moduleDimension"]["width"],
                                "height": module["moduleDimension"]["height"],
                                "files": files,
                            }
                        )
                        print("Adding PANEL:", panel)
                        db.add(panel)
                        db.commit()
            # for item in data:
            #     db.add(models.Panel(**item))
            # db.commit()
    except Exception as e:
        # db.rollback()
        print(f"Push {serie} - {module['model']} data error: {e}")
        print(traceback.format_exc())
    finally:
        db.close()


if __name__ == "__main__":
    push_data()
