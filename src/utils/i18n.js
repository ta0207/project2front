import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    resources:{
        en: {
            translation:{
            "button1" : "Change Room" ,
            "button2" : "Cancel" ,
             "eng"   : "English" ,
             "viet"   : "Vietnamese" ,
             "email"  : "Email",
             "first" : "First Name",
             "last"  : "Last Name",
             "indate" : "Check In Date",
             "outdate" : "Check Out Date",
             "room"    : "Current Room",
             'header' : 'Your Reservation Info:',
             "roomnum" : "Room Number",
             "confirm" : "Confirm Cancellation?"
        }
        },
        vn: {
            translation:{

            "button1" : "Đổi Phòng" ,
            "button2" : "Xoá Bỏ" ,
             "eng"   : "Tieng Anh" ,
             "viet"   : "Tiếng Việt" ,
             "email"  : "E-mail",
             "first" : "Tên",
             "last"  : "Họ",
             "indate" : "Ngày Vào",
             "outdate" : "Ngày Ra",
             "room"    : "Phòng Hiện Tại",
             'header' : 'Phòng Đặt Của Bạn',
             "roomnum" : "Số Phòng",
             "confirm" : "Xoá Bỏ?"

        }
        }
    },
    fallbackLng: 'en'
})

export default i18n;

