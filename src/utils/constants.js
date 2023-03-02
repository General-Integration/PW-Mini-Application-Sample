import bgImage from '@/assets/images/bg.svg'
import { GET_PROFILE, GET_BUSINESS_DETAILS, GET_ALL_STAFFS, GET_USER_ROLES, GET_OUTLETS, GET_ALL_BUSINESS } from '@/utils/strings'

export const DEFAULT_CURRENCY = 'USD'
export const ENCRYPT_SECRET_KEY = '123#$%'

export const EVENTS = [
    { 'key': 'getProfile', 'title': GET_PROFILE },
    { 'key': 'getBusiness', 'title': GET_BUSINESS_DETAILS },
    { 'key': 'getStaffs', 'title': GET_ALL_STAFFS },
    { 'key': 'getUserRoles', 'title': GET_USER_ROLES },
    { 'key': 'getOutlets', 'title': GET_OUTLETS },
    { 'key': 'getAllBusiness', 'title': GET_ALL_BUSINESS }
];

export const SERVICES = [
    {
        id: 1,
        thumbnail_url: bgImage,
        title: 'Service #1',
        price_original: 1,
        currency: 'USD',
        price: '$1.00'
    },
    {
        id: 2,
        thumbnail_url: bgImage,
        title: 'Service #2',
        price_original: 1,
        currency: 'USD',
        price: '$1.00'
    },
    {
        id: 3,
        thumbnail_url: bgImage,
        title: 'Service #3',
        price_original: 2,
        currency: 'USD',
        price: '$2.00'
    },
    {
        id: 4,
        thumbnail_url: bgImage,
        title: 'Service #4',
        price_original: 2,
        currency: 'USD',
        price: '$2.00'
    },
    {
        id: 5,
        thumbnail_url: bgImage,
        title: 'Service #5',
        price_original: 2,
        currency: 'USD',
        price: '$2.00'
    },
    {
        id: 6,
        thumbnail_url: bgImage,
        title: 'Service #6',
        price_original: 4000,
        currency: 'KHR',
        price: '៛4,000'
    },
    {
        id: 7,
        thumbnail_url: bgImage,
        title: 'Service #7',
        price_original: 4000,
        currency: 'KHR',
        price: '៛4,000'
    },
    {
        id: 8,
        thumbnail_url: bgImage,
        title: 'Service #8',
        price_original: 8000,
        currency: 'KHR',
        price: '៛8,000'
    }
];

export const ROUTE_NAME = {
    home: 'Home', 
    order: 'Order', 
    success: 'Success',
    eventAll: 'Event All',
    eventDetail: 'Event Detail'
}