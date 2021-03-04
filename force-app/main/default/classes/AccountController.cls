public class AccountController {
    @AuraEnabled
    public static List<Account> allAccounts1(){
        List<Account> tempList = new List<Account>([select Name,Rating,Phone from Account order by phone nulls last,Rating nulls last]);
        return tempList;
    }
}