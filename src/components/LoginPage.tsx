// src/components/LoginPage.tsx
import React from 'react'
import { Box, Button, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react'

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Perform login logic here
  }

  return (
    <Box width="100%" maxWidth="450px" mx="auto" mt="5">
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Enter your email" />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="Enter your password" />
          </FormControl>
          <Button type="submit" colorScheme="blue" width="100%">
            Log in
          </Button>
        </VStack>
      </form>
    </Box>
  )
}

export default LoginPage
