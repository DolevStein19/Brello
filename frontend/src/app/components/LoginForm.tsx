'use client'

import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    FormErrorMessage
} from '@chakra-ui/react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
})

export default function LoginForm() {
    return (
        <Flex bg="gray.100" align="center" justify="center" h="100vh">
            <Heading mb={6} mr={5}>Brello</Heading>
            <Box bg="white" p={6} rounded="md" w={64}>
                <Heading mb={5} size="md">Login</Heading>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={LoginSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        // API call would go here
                        console.log(values)
                        setTimeout(() => {
                            setSubmitting(false)
                        }, 1000)
                    }}
                >
                    {({ isSubmitting, errors, touched, handleChange, handleBlur, values }) => (
                        <Form>
                            <FormControl isInvalid={!!errors.email && touched.email} mb={4}>
                                <FormLabel htmlFor="email">Email Address</FormLabel>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    variant="filled"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                <FormErrorMessage>{errors.email}</FormErrorMessage>
                            </FormControl>

                            <FormControl isInvalid={!!errors.password && touched.password} mb={4}>
                                <FormLabel htmlFor="password">Password</FormLabel>
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    variant="filled"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                                <FormErrorMessage>{errors.password}</FormErrorMessage>
                            </FormControl>

                            <Button
                                type="submit"
                                colorScheme="blue"
                                width="full"
                                mt={5}
                                isLoading={isSubmitting}
                            >
                                Sign In
                            </Button>
                        </Form>
                    )}
                </Formik>
            </Box>
        </Flex>
    )
}