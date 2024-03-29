/* eslint-disable react/prop-types */
import { Input, Typography } from "antd";
import { Controller, useFormContext } from "react-hook-form";

const CustomInput = ({
  name,
  type,
  size,
  value,

  placeholder,

  label,
  defaultValue,
}) => {
  const { control } = useFormContext();
  return (
    <>
      <Typography
        style={{ fontSize: 12, fontWeight: 500, fontFamily: "serif" }}
      >
        {label ? label : null}
      </Typography>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Input
            placeholder={placeholder}
            size={size}
            type={type}
            {...field}
            defaultValue={defaultValue ? defaultValue : ""}
            value={value ? value : field.value}
          />
        )}
      />
    </>
  );
};

export default CustomInput;
