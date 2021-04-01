import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Name from './components/Names/Names'
import './App.css';

const client = new ApolloClient({
  uri: 'https://sapient-node-deploy.herokuapp.com/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
          <Name /> 
      </div>
    </ApolloProvider>
  );
}

export default App;