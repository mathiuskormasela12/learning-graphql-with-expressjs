// ========== GraphQL Schema
// import all packages
import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
} from 'graphql';
import _ from 'underscore';

const gfriend = [
  {
    id: '1',
    firstName: 'Sojung',
    lastName: 'Kim',
    birthday: '7 December 1995',
    agency: 'OUI Entertainment',
  },
  {
    id: '2',
    firstName: 'Yerin',
    lastName: 'Jung',
    birthday: '19 August 1996',
    agency: 'Sublime',
  },
  {
    id: '3',
    firstName: 'Eunbi',
    lastName: 'Jung',
    birthday: '30 May 1997',
    agency: 'BPM Entertainment',
  },
  {
    id: '4',
    firstName: 'Yuna',
    lastName: 'Choi',
    birthday: '4 October 1997',
    agency: 'Konnect Entertainment',
  },
  {
    id: '5',
    firstName: 'Eunbi',
    lastName: 'Hwang',
    birthday: '3 June 1998',
    agency: 'BPM Entertainment',
  },
  {
    id: '6',
    firstName: 'Yewon',
    lastName: 'Kim',
    birthday: '19 August 1998',
    agency: 'BPM Entertainment',
  },
];

const GfriendType = new GraphQLObjectType({
  name: 'gfriend',
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    firstName: {
      type: GraphQLString,
    },
    lastName: {
      type: GraphQLString,
    },
    birthday: {
      type: GraphQLString,
    },
    agency: {
      type: GraphQLString,
    },
  }),
});

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    getMember: {
      type: GfriendType,
      args: {
        id: {
          type: GraphQLID,
        },
      },
      resolve(parent, args) {
        // Manual
        // return gfriend.find((item) => item.id === args.id);

        // Pake underscore
        return _.find(gfriend, { id: args.id });
      },
    },
  },
});

export default new GraphQLSchema({
  query: RootQueryType,
});
