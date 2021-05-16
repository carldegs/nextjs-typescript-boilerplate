import { QuestionIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  Box,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputProps,
  InputRightAddon,
  InputRightElement,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Stack,
} from '@chakra-ui/react';
import React, { FC, ReactElement, useState } from 'react';
import { DeepMap, FieldError } from 'react-hook-form';

interface RegInputProps extends InputProps {
  label?: string;
  error?: FieldError;
  errors?: DeepMap<any, FieldError>;
  register?: any;
  trigger?: any;
  rightAddon?: FC | string;
  rightButton?: ReactElement;
  helperText?: any;
  helpButton?: boolean;
}

const RegInput: React.FC<RegInputProps> = ({
  label,
  error,
  isRequired,
  name,
  variant,
  type,
  register,
  errors,
  width,
  rightAddon,
  rightButton,
  helperText,
  helpButton,
  trigger,
  ...props
}: RegInputProps) => {
  let finalType = type;
  const [showPassword, setShowPassword] = useState(false);

  if (type === 'password' && showPassword) {
    finalType = 'text';
  }

  if (errors && name && !error) {
    // eslint-disable-next-line no-param-reassign
    error = errors[name];
  }

  return (
    <FormControl
      data-testid="TextFC"
      isInvalid={!!error?.type}
      isRequired={isRequired}
    >
      {label && (
        <Box>
          <FormLabel htmlFor={name}>{label}</FormLabel>

          {helpButton && (
            <Popover trigger={trigger}>
              <PopoverTrigger>
                <QuestionIcon aria-label="help" h={4} w={4} color="blue.300" />
              </PopoverTrigger>
              <PopoverContent zIndex={4}>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>{label}</PopoverHeader>
                <PopoverBody>{helperText}</PopoverBody>
              </PopoverContent>
            </Popover>
          )}
        </Box>
      )}
      <InputGroup width={width}>
        <Input
          variant={variant || 'flushed'}
          id={name}
          type={finalType}
          data-testid={name}
          {...register(name)}
          {...props}
        />
        {type === 'password' && (
          <InputRightElement>
            <Stack isInline>
              <IconButton
                size="sm"
                aria-label={showPassword ? 'Hide Password' : 'Show Password'}
                icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                onClick={() => setShowPassword(!showPassword)}
              />
              {rightButton}
            </Stack>
          </InputRightElement>
        )}
        {rightAddon && <InputRightAddon>{rightAddon}</InputRightAddon>}
      </InputGroup>
      {helperText && !helpButton && (
        <FormHelperText>{helperText}</FormHelperText>
      )}
      {error?.message && (
        <FormErrorMessage data-testid="TextFC-error">
          {error?.message}
        </FormErrorMessage>
      )}
    </FormControl>
  );
};

export default RegInput;
