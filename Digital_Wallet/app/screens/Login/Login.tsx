import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { 
    Container,
    ContentHeader,
    Title, 
    Description,
    ViewButton, 
    ContentBody,
    ContentFooter
} from './styles';

const Login: React.FC = () => {
  return (
    <SafeAreaView>
        <Container>

        <ContentHeader>

      <Title>Welcome {"\n"} the {"\n"} Wallet App</Title>

        <Description></Description>

        <ViewButton></ViewButton>

        </ContentHeader>

        <ContentBody></ContentBody>

        <ContentFooter></ContentFooter>

    </Container>

    </SafeAreaView>
  )
}

export default Login;