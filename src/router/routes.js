import Login from './../pages/login/index.component';
import Register from './../pages/register/index.component';
import GuideList from './../pages/guideList/index.component';
import HelpDoc from './../pages/helpDoc/index.component';
import GoodsList from './../pages/goodsList/index.component';
import Authentiacion from './../pages/mine/subpage/authentication/index.component';
import BankCard from './../pages/mine/subpage/bankCard/index.component';
import AccountInfo from './../pages/mine/subpage/accountInfo/index.component';
import UpdatePassword from './../pages/mine/subpage/updatePassoword/index.component';
import SetAccount from './../pages/goodsList/subPage/setAccount/index.compoent';
import OrderList from './../pages/order/subpage/orderList/index.component';
import BrowseOrderDetail from './../pages/order/subpage/browseOrderDetail/index.component';
import AdvancePaymentOrderDetail from './../pages/order/subpage/advancePaymentOrderDetail/index.component';
import DoneOrder from './../pages/order/subpage/doneOrder/index.component';
import AboutApp from './../pages/mine/subpage/aboutApp/index.component';
import AccountMange from './../pages/mine/subpage/accountManage/index.component';
import AddbankCard from './../pages/mine/subpage/addBankCard/index.component';
import UpdateAccount from './../pages/mine/subpage/updateAccount/index.component';
import AddAccount from './../pages/mine/subpage/addAccount/index.component';
export default Routes = {
    login: {
        screen: Login,
        navigationOptions: {
            header: null,
        }
    },
    register: {
        screen: Register,
        navigationOptions: {
            header: null,
        }
    },
    GuideList: {
        screen: GuideList,
        navigationOptions: ({ navigation }) => ({
            title: navigation.state.params.data.title,
        }),
    },
    HelpDoc: {
        screen: HelpDoc,
        navigationOptions: ({ navigation }) => ({
            title: navigation.state.params.data.title,
        }),
    },
    GoodsList: {
        screen: GoodsList,
        navigationOptions: ({ navigation }) => ({
            title: navigation.state.params.data.title,
        }),
    },
    setAccount: {
        screen: SetAccount,
        navigationOptions: ({ navigation }) => ({
            title: '修改账号顺序',
        }),
    },

    //订单
    orderList: {
        screen: OrderList, //订单列表
        navigationOptions: ({ navigation }) => ({
            title: navigation.state.params.data.title,
        }),
    },
    browseOrderDetail: {
        screen: BrowseOrderDetail, //浏览任务详情
        navigationOptions: ({ navigation }) => ({
            title: '浏览任务详情',
        }),
    },
    advancePaymentOrderDetail: {
        screen: AdvancePaymentOrderDetail, //垫付任务详情
        navigationOptions: ({ navigation }) => ({
            title: '垫付任务详情',
        }),
    },
    doneOrder: {
        screen: DoneOrder, //垫付任务详情
        navigationOptions: ({ navigation }) => ({
            title: '垫付任务详情',
        }),
    },

    //个人中心
    authentiacion: {
        screen: Authentiacion,
        navigationOptions: ({ navigation }) => ({
            title: '实名认证',
        }),
    },
    bankCard: {
        screen: BankCard,
        navigationOptions: ({ navigation }) => ({
            title: '银行账户',
        }),
    },
    accountInfo: {
        screen: AccountInfo,
        navigationOptions: ({ navigation }) => ({
            title: '账户信息',
        }),
    },
    updatePassword: {
        screen: UpdatePassword,
        navigationOptions: ({ navigation }) => ({
            title: '修改密码',
        }),
    },
    accountMange: {
        screen: AccountMange, //买好管理
        navigationOptions: ({ navigation }) => ({
            title: navigation.state.params.data.title,
        }),
    },
    addAccount: {
        screen: AddAccount,
        navigationOptions: {
            title: '添加账号',
        }
    },
    updateAccount: {
        screen: UpdateAccount, //更新买好信息
        navigationOptions: ({ navigation }) => ({
            title: '修改账户信息',
        }),
    },
    aboutApp: {
        screen: AboutApp, //关于app
        navigationOptions: ({ navigation }) => ({
            title: navigation.state.params.data.title,
        }),
    },
    addbankCard: {
        screen: AddbankCard, //银行卡
        navigationOptions: ({ navigation }) => ({
            title: '添加银行卡'
        }),
    },
}