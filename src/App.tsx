import { List, InfoBoard } from 'components'
import { UserContextProvider } from 'context';
import { loadList, ListItem } from 'mocks'
import { useState } from 'react';

import styles from './App.module.css';

const App = () => {
  const [ items, setItems ] = useState<ListItem[] | null>(null)
  
  return (
    <div className={styles.App}>
      <UserContextProvider>
        <InfoBoard title="Hello, World!" />
        { items && <List items={items} /> }
        { !items && <h4>Loading...</h4> }
      </UserContextProvider>
    </div>
  )
}

export default App;
