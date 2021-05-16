import { AnySchema } from '@hapi/joi';
import { joiResolver } from '@hookform/resolvers/joi';
import { useForm, UseFormProps, UseFormReturn } from 'react-hook-form';

const useJoiForm = <T>(
  defaultValues: T,
  schema?: Record<keyof T, AnySchema>,
  options?: UseFormProps<T>
): UseFormReturn<T> => {
  const results = useForm<T>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: defaultValues as any,
    criteriaMode: 'all',
    resolver: joiResolver(schema, { abortEarly: false }),
    ...options,
  });

  return results;
};

export default useJoiForm;
