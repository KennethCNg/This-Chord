import * as DMAPIUtil from '../util/dm_api_util';
import { requestAllChatrooms } from './chatroom_actions.js';
import { receiveErrors } from './ui_actions';

export const requestCreateDM = (dm) => dispatch => {
  debugger;
  return (
    DMAPIUtil.requestCreateDM(dm)
    .then(() => dispatch(requestAllChatrooms()),
    (err) => dispatch(receiveErrors(err.reponseJSON)))
  );
};
