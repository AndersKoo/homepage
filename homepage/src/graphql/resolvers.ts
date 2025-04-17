const Aboutme = require("../models/Aboutme");

module.exports = {
  Query: {
    aboutme: async (_: any, { ID }: { ID: string }) => {
      return await Aboutme.findById(ID);
    },
    getAboutme: async (_: any, { amount }: { amount: number }) => {
      return await Aboutme.find().sort({ createdAt: -1 }).limit(amount);
    },
  },
  Mutation: {},
};
