const {
  ConversationModel,
} = require("../../../models/ChatSpaceModels/conversation");
const { getLatestMsg } = require("./latestMessage/getLatestMsg");

const addNewConvo = async (req, res) => {
  try {
    const userConvo = await ConversationModel.findOne({
      members: [req.body.senderId, req.body.receiverId],
    });
    const userConvoRev = await ConversationModel.findOne({
      members: [req.body.receiverId, req.body.senderId],
    });
    const convoDb = userConvo ? userConvo : userConvoRev ? userConvoRev : null;

    if (convoDb) {
      res.json(convoDb);
    } else {
      const newConvo = new ConversationModel({
        members: [req.body.senderId, req.body.receiverId],
      });
      const savedConversation = await newConvo.save();

      if (savedConversation) {
        console.log("convo created");
        res.status(200).json(savedConversation);
      } else {
        res.json(200).json("convo not created");
      }
    }
  } catch (error) {
    console.log(`Error at convo creation: ${error}`);
    res.status(500).json({ err: error });
  }
};

const getConvo = async (req, res) => {
  try {
    const conversation = await ConversationModel.find({
      members: { $in: [req.params.userId] },
    });

    const finalConvo = await Promise.all(
      conversation.map(async (convo) => {
        const latestMsg = await getLatestMsg(convo._id);
        return {
          _id: convo._id,
          members: convo.members,
          lastMessage: latestMsg[0],
        };
      })
    );

    res.status(200).json(finalConvo);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

module.exports = {
  addNewConvo,
  getConvo,
};
