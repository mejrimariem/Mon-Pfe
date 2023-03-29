import { track } from 'lwc';
import testOrderImage from '@salesforce/resourceUrl/testOrderImage';
import ChatMessage from 'lightningsnapin/baseChatMessage';
 
const CHAT_CONTENT_CLASS = 'chat-content';
const AGENT_USER_TYPE = 'agent';
const CHASITOR_USER_TYPE = 'chasitor';
const SUPPORTED_USER_TYPES = [AGENT_USER_TYPE, CHASITOR_USER_TYPE];
 
export default class ChatBotlwcComponent extends ChatMessage  {
    @track messageStyle = '';
 @track imageURL = testOrderImage;
 @track name = 'Order Product Image';
 @track showImage = false;
 
 isSupportedUserType(userType) {
        return SUPPORTED_USER_TYPES.some((supportedUserType) => supportedUserType === userType);
    }
 
    connectedCallback() {
        if (this.isSupportedUserType(this.userType)) {
            this.messageStyle = `${CHAT_CONTENT_CLASS} ${this.userType}`;
        } else {
            throw new Error(`Some error occurs : ${this.userType}`);
        }
        if(this.messageContent.value === 'Product Image Answer'){
            this.showImage = true;
        }else{
            this.showImage = false;
        }
    }
}