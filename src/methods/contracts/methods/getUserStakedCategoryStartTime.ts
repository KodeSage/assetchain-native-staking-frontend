import abiManager from "abiManager";
import moment from "moment";
import createContract from "../contract-creator";

async function GetUserStakedCategoriesStartTime(categoryId:any) {
    try {
       
        const stakingContract = await createContract(abiManager.XSTAKING, "0x4150f98C94BA89Ac78eC28131Be6a0c1B41224E2");
      
        const res = await stakingContract.methods.getTokenStakingStartTimeById(categoryId).call();
        return moment.unix(res).format("YYYY-MM-DD HH:mm");
       

    } catch (err :any) {
       
    }
}

export default GetUserStakedCategoriesStartTime;