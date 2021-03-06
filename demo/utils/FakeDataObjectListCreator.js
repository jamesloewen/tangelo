import faker from 'faker';


const _createFakeObjectList = (fields, numObjects) => {
  const list = [];

  for (let index = 0; index < numObjects; index++) {
    list.push(
      Object.assign(
        { id: index },
        ...Object.entries(fields).map(field => ({ [field[0]]: field[1]() }))
      )
    );
  }

  return list;
};


/**
 * Utilities for creating arrays of fake data objects.
 */
const FakeDataObjectListCreator = {
  createFakePeopleList: (numObjects) => {
    const fields = {
      firstName: faker.name.firstName,
      lastName: faker.name.lastName,
      email: faker.internet.email,
      address: faker.address.streetAddress,
      birthDate: faker.date.past,
      thumbnail: faker.image.avatar,
    };

    return _createFakeObjectList(fields, numObjects);
  },
}


export default FakeDataObjectListCreator;
