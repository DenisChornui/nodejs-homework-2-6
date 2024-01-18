import Contact from "../models/Contact.js";

import { HttpError } from "../helpers/index.js";
import {
  contactAddSchema,
  contactUpdateSchema,
} from "../schemas/contact-schemas.js";
import {ctrlWrapper} from "../decorators/index.js"

const getAllContacts = async (req, res) => {
  
    const result = await Contact.find();

    res.json(result);
};

// const getById = async (req, res) => {
  
//     const { contactId } = req.params;
//     const result = await contactsService.getContactById(contactId);
//     if (!result) {
//       throw HttpError(404, `Not found`);
//     }

//     res.json(result);
// };

const add = async (req, res) => {
    const result = await Contact.create(req.body);

    res.status(201).json(result);
};

// const updateById = async (req, res) => {
//     const { contactId } = req.params;
//     const result = await contactsService.updateContactById(contactId, req.body);
//     if (!result) {
//       throw HttpError(404, `Not found`);
//     }
//     res.json(result);
// };

// const deleteById = async (req, res) => {
  
//     const { contactId } = req.params;
//     const result = await contactsService.removeContact(contactId);
//     if (!result) {
//       throw HttpError(404, `Not found`);
//     }
//     res.json({
//       message: "contact deleted",
//     });
// };

export default {
  getAllContacts: ctrlWrapper(getAllContacts),
  // getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  // updateById: ctrlWrapper(updateById),
  // deleteById: ctrlWrapper(deleteById),
};
