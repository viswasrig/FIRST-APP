import {Injectable} from "@angular/core"

export const COMPANYIES = {
    RAJA_PUSHPA : "Raja Pushpa",
    L_AND_T : "L&&T",
    HMDA : "HMDA",
    APRNA : "APRNA",
    PHEONIX : "PHEONIX"
}

@Injectable()
export class CompanyService{

    getCompanyNames(){
        return [
            COMPANYIES.RAJA_PUSHPA,
            COMPANYIES.L_AND_T,
            COMPANYIES.HMDA,
            COMPANYIES.APRNA,
            COMPANYIES.PHEONIX
        ]
    }

    getComnayNameObjects(){
        let myArray:Array<Object> = [];
        myArray.push({compId:23423, compName:COMPANYIES.RAJA_PUSHPA});
        myArray.push({compId:23132, compName:COMPANYIES.L_AND_T});
        myArray.push({compId:24323, compName:COMPANYIES.HMDA});
        myArray.push({compId:26789, compName:COMPANYIES.APRNA});
        myArray.push({compId:52423, compName:COMPANYIES.PHEONIX});

        return myArray;
    }

}