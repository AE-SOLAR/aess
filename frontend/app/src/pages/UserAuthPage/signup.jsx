import React, { useEffect, useState } from "react";
import { BrandInput } from "../../components/Input";
import { CheckBox } from "../../components/ui/check-box";
import BrandButton from "../../components/BrandButton";
import { apiSignUp } from "../../handlers/api";
import { LoadingBlocker } from "../../components/ui/loading-blocker";

const SignUp = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    companyPhone: "",
    website: "",
    vatId: "",
    businessLicenseDocument: [],
    streetAndNumber: "",
    postcode: "",
    city: "",
    country: "",
    name: "",
    surname: "",
    jobTitle: "",
    phoneNumber: "",
    workingTimeForContact: "",
    timezone: "",
    loginEmail: "",
    password: "",
    passwordCheck: "",
    acceptTermsAndConditions: false,
    acceptPrivacyPolicy: false,
    subscribeNewsletter: false,
  });

  const [errors, setErrors] = useState({});
  const [isFormFilled, setIsFormFilled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (isFormFilled) {
      setIsLoading(true);
      await apiSignUp(formData);
      setIsLoading(false);
    }
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    setFormData({ ...formData, businessLicenseDocument: files });
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleFormFillCheck = () => {
    const requiredFields = [
      "companyName",
      "companyPhone",
      "vatId",
      // "businessLicenseDocument",
      "streetAndNumber",
      "postcode",
      "city",
      "country",
      "name",
      "surname",
      "loginEmail",
      "password",
      "passwordCheck",
      "acceptTermsAndConditions",
      "acceptPrivacyPolicy",
    ];

    const newErrors = {};

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = true;
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsFormFilled(true);
    } else {
      setIsFormFilled(false);
    }
  };

  useEffect(() => {
    handleFormFillCheck();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);

  const mapBrandInputs = (fields) => {
    return fields.map(({ title, field, type }) => (
      <BrandInput
        key={field}
        type={type}
        value={formData[field]}
        setValue={(value) => handleChange(field, value)}
        style={
          errors[field] && {
            backgroundColor: "rgba(36, 21, 21, 1)",
          }
        }
      >
        {title}
      </BrandInput>
    ));
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 relative">
      {isLoading && <LoadingBlocker />}
      <div className="self-stretch h-[100%] flex-col justify-start items-start gap-8 flex">
        <div className="flex-col justify-center items-center gap-8 flex">
          <div className="text-white text-4xl font-bold">Registration form</div>
          <div className="self-stretch text-white text-2xl font-normal">
            Welcome ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <div
          style={{
            width: "100%",
            justifyItems: "center",
            alignItems: "flex-start",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(550px, 1fr))",
            gap: "10px",
          }}
        >
          <div className="self-stretch flex-col justify-start items-start gap-10 flex">
            <div className="flex-col justify-start items-start gap-5 flex">
              <div className="text-white text-2xl font-bold">
                Company information
              </div>
              <div className="flex-col justify-start items-start gap-2.5 flex">
                {mapBrandInputs([
                  { title: "Company name", field: "companyName" },
                  { title: "Company phone", field: "companyPhone" },
                  { title: "VAT ID", field: "vatId" },
                  {
                    title: "Business license document",
                    field: "businessLicenseDocument",
                    type: "file",
                  },
                  { title: "WebSite", field: "website" },
                ])}
              </div>
            </div>

            <div className="flex-col justify-start items-start gap-5 flex">
              <div className="text-white text-2xl font-bold">
                Company address
              </div>
              <div className="flex-col justify-start items-start gap-2.5 flex">
                {mapBrandInputs([
                  { title: "Street and number", field: "streetAndNumber" },
                  { title: "Postcode", field: "postcode" },
                  { title: "City", field: "city" },
                  { title: "Country", field: "country" },
                ])}
              </div>
            </div>

            <div className="flex-col justify-start items-start gap-5 flex">
              <div className="text-white text-2xl font-bold">
                Contact person information
              </div>
              <div className="flex-col justify-start items-start gap-2.5 flex">
                {mapBrandInputs([
                  { title: "Name", field: "name" },
                  { title: "Surname", field: "surname" },
                  { title: "Job title", field: "jobTitle" },
                  { title: "Phone number", field: "phoneNumber" },
                  {
                    title: "Working time for contact",
                    field: "workingTimeForContact",
                  },
                  { title: "Timezone", field: "timezone" },
                ])}
              </div>
            </div>

            <div className="flex-col justify-start items-start gap-5 flex">
              <div className="text-white text-2xl font-bold">
                Log in information
              </div>
              <div className="flex-col justify-start items-start gap-2.5 flex">
                {mapBrandInputs([
                  { title: "E-mail", field: "loginEmail" },
                  { title: "Password", field: "password", type: "password" },
                  {
                    title: "Password check",
                    field: "passwordCheck",
                    type: "password",
                  },
                ])}
              </div>
            </div>

            <div className="h-20 flex-col justify-start items-start gap-2.5 flex">
              <CheckBox
                isChecked={formData.acceptTermsAndConditions}
                setIsChecked={(value) =>
                  handleChange("acceptTermsAndConditions", value)
                }
                style={
                  errors.acceptTermsAndConditions && {
                    borderBottom: "1px dotted red",
                  }
                }
              >
                <span className="text-white text-xs font-normal">
                  I accept the
                </span>
                <span className="text-white text-xs font-normal underline">
                  Terms & Conditions
                </span>
              </CheckBox>
              <CheckBox
                isChecked={formData.acceptPrivacyPolicy}
                setIsChecked={(value) =>
                  handleChange("acceptPrivacyPolicy", value)
                }
                style={
                  errors.acceptPrivacyPolicy && {
                    borderBottom: "1px dotted red",
                  }
                }
              >
                <span className="text-white text-xs font-normal">I accept</span>
                <span className="text-white text-xs font-normal underline">
                  Privacy policy
                </span>
              </CheckBox>
              <CheckBox
                isChecked={formData.subscribeNewsletter}
                setIsChecked={(value) =>
                  handleChange("subscribeNewsletter", value)
                }
              >
                <span className="text-white text-xs font-normal">
                  I want to subscribe AESOLAR shop newsletter
                </span>
              </CheckBox>
            </div>

            <BrandButton
              onClick={handleSubmit}
              disabled={!(Object.keys(errors).length === 0)}
            >
              Send for approval
            </BrandButton>
          </div>
          <div
            style={{
              display: "flex",
              width: "550px",
              height: "447px",
              borderRadius: "30px",
              border: "2px solid rgba(100, 16, 16, .5)",
              boxShadow: "0px 0px 75px rgba(100, 16, 16, .5)",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                position: "relative",

                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "3rem",

                padding: "2rem",

                opacity: "0.8",
                backgroundPosition: "center",
                backgroundImage: "url('/static/images/signup/info-bg.png",
                backgroundRepeat: "no-repeat",

                overflow: "hidden",

                borderRadius: "30px",
              }}
            >
              <p
                style={{
                  fontSize: "2rem",
                }}
              >
                Important <br />
                <span style={{ color: "red" }}>Infomation</span>
              </p>
              <span>
                AESOLAR is a wholesaler. To become a AESOLAR customer, you need
                a trade licence and you must be an installer. For your
                registration we need to know the following:
                <ul
                  style={{
                    listStyleType: "disc",
                    listStylePosition: "inside",
                  }}
                >
                  <li>your company name</li>
                  <li>your company address</li>
                  <li>your VAT ID you business</li>
                </ul>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
