import { Heading, Text, Box, Flex, FormControl, FormHelperText, FormLabel, Input, Button, FormErrorMessage } from '@chakra-ui/react';
import './App.css';
import { Formik, Form, Field, FieldProps } from 'formik';

interface FormikExampleProps {}

const Registration: React.FC = () => {
  const FormikExample: React.FC<FormikExampleProps> = () => {
    const validateName = (value: string) => {
      let error;
      console.log('value', value);
      
      if (!value) {
        error = 'Name is required';
      } else if (value.toLowerCase() !== 'naruto') {
        error = "Jeez! You're not a fan 😱";
      }
      return error;
    };

    return (
      <Formik
        initialValues={{ name: 'Joe' }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {(props) => (
          <Form>
            <Field name="name" validate={validateName}>
              {({ field, form }: FieldProps) => (
                <FormControl isInvalid={Boolean(form.errors.name && form.touched.name)}>
                  <FormLabel>First name</FormLabel>
                  <Input {...field} placeholder="name" />
                  <FormErrorMessage>{String(form.errors.name)}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              mt={4}
              colorScheme="teal"
              isLoading={props.isSubmitting}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    );
  };

  return <FormikExample />;
};

export default Registration;
