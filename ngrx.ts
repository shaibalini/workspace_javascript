class State<TEntity> {
  constructor(
    public ids: Array<string> = [],
    public entities: { [id: string]: TEntity } = {}
  ) { }
}

class Person {
  constructor(
    public lastName: string,
    public firstName: string
  ) { }
}

class Book {
  constructor(
    public title: string,
    public isbn: string
  ) { }
}

class Store {
  constructor(
    public person = new State<Person>(),
    public book = new State<Book>()
  ) { }
}

type GetState = (store: Store) => State<TEntity>;
const getEntitiesSelector =  (getState: GetState) => Reselect.createSelector(getState, (state: State<TEntity>) => state.entities);
const getIdsSelector = (getState: GetState) => Reselect.createSelector(getState, (state: State<TEntity>) => state.ids);
const getAllSelector = (entities, ids) => {
  return ids.map(id => entities[id]);
};

function createSelectors(getState: GetState){
  const selectors = {
    ['getEntities']: getEntitiesSelector(getState),
    ['getIds']: getIdsSelector(getState)
  };
  
  selectors['getAll'] = Reselect.createSelector(selectors.getEntities, selectors.getIds, getAllSelector);
  
  return selectors;
}

const store = new Store();
store.book.entities['a'] = {id: 'a'};
store.book.ids = [...store.book.ids, 'a'];

const bookState = (store: Store) => store.book;
const book = createSelectors(bookState);
const getBookEntities = getEntitiesSelector(bookState);

console.log(getBookEntities(store));
