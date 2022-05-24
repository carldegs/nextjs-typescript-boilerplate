# nextjs-typescript-boilerplate

A custom template based on NextJS in Typescript.

It includes the following libraries/frameworks:

- [Chakra UI](https://chakra-ui.com/) (UI Framework)
- [React Hook Form](https://react-hook-form.com/) (Form Validation)
- [Joi](https://joi.dev/api/) (Validation Schema)
- [React Query](https://react-query.tanstack.com/) (Data Handling)

The following are also setup:

- Added `useJoiForm` that assists in using `useForm` with a `joiResolver`. This uses a custom class `FormObject` that would also assist you in creating the default values and schemas of your form.
- Addded `<QFormControl />` which can help create `FormControl`s already integrated with `react-hook-form`. To use this:
  - you must wrap them in a `<FormProvider />`. More info [here](https://react-hook-form.com/api/useformcontext).
  - For nested or complex inputs (e.g, using `<InputGroup />`), use the control prop to set what component should be registered.
- Chakra UI theme extended with a custom scrollbar and a full-height html page.
- Custom Layout component with Sidebar
- ESLint setup using recommended rules
- Custom prettier rules that includes automatic sorting of imports

## Sample Form Handler

### Creating the Form Handler

```typescript
interface UserProfile {
  firstName: string;
  lastName: string;
  age: number;
  gender: GenderDemographicsEnum;
  yearsInCurrRole: number;
}

export default new FormObject<UserProfile>(
  {
    firstName: '',
    lastName: '',
    age: null,
    gender: null,
    yearsInCurrRole: null,
  },
  {
    firstName: Joi.string()
      .required()
      .messages(createErrorMessages('First Name', ['emptyString'])),
    lastName: Joi.string()
      .required()
      .messages(createErrorMessages('Last Name', ['emptyString'])),
    age: Joi.number()
      .min(MIN_AGE)
      .required()
      .messages(
        createErrorMessages('Age', [
          'notNumber',
          { type: 'lessThanMin', min: MIN_AGE },
        ])
      ),
    gender: Joi.string()
      .valid(...Object.values(GenderDemographicsEnum))
      .messages(createErrorMessages('Gender', ['emptyString', 'notOption'])),
    yearsInCurrRole: Joi.number()
      .min(MIN_YEARS_IN_CURR_ROLE)
      .required()
      .messages(
        createErrorMessages('Field', [
          'notNumber',
          { type: 'lessThanMin', min: MIN_YEARS_IN_CURR_ROLE },
        ])
      ),
  }
);
```

### Using the Form Handler

```typescript
  const EditProfile: React.FC = () => {    
    const methods = useJoiForm(profileFormObject);
    
    return (
      <FormProvider {...methods}>
        <QFormControl
          name="firstName"
          label="First Name"
          isRequired
          flex={1}
        >
          <Input variant="flushed" />
        </QFormControl>

        <QFormControl
          name="lastName"
          label="Last Name"
          isRequired
          flex={1}
        >
          <Input variant="flushed" />
        </QFormControl>

        /* ... */
      </FormProvider>
    )
  }
```

## API Handlers

Use the `createApiHandler` to easily create your api routes.

```typescript
// /pages/api/users/[id].ts

const UserHandler = createApiHandler().get(async (req, res) => {
  const { id } = req.query;

  if (isInvalid(id)) {
    throw new Error('ID invalid');
  }

  const userData = getData(id);

  return res.json(userData);
}).post(async (req, res) => {
  // ...
}).put(async (req, res) => {
  // ...
})
//...
```

## API Errors

Extend the `APIError` class at `/src/lib/errors/APIError` when creating custom errors.

```typescript
export class ListingNotFoundError extends ApiError {
  constructor(id: string) {
    super(404, `Listing of ${id} was not found.`);
  }
}
```
