# nextjs-typescript-boilerplate

A custom template based on NextJS in Typescript.

It includes the following libraries/frameworks:

- [Chakra UI](https://chakra-ui.com/) (UI Framework)
- [React Hook Form](https://react-hook-form.com/) (Form Validation)
- [Joi](https://joi.dev/api/) (Validation Schema)
- [React Query](https://react-query.tanstack.com/) (Data Handling)

The following are also setup:

- Added `useJoiForm` that assists in using `useForm` with a `joiResolver`.
- Addded `<RegInput />` which can help create `FormControl`s used with `react-hook-form`.
- Chakra UI theme extended with a custom scrollbar and a full-height html page.
- Custom Layout component with Sidebar
- ESLint setup using recommended rules
- Custom prettier rules that includes automatic sorting of imports
