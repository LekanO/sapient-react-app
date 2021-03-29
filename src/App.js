import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Name from './components/Names'
import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
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