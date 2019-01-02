import { post } from '@/common/fetch';
import API from '@/contants/api';

export default {
    getUserInfo: (params) => post(API.USER_INFO, params)
}
;
