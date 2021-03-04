public class ListAccountExample {
    public static void displayAccountsList(){
        List<Account> accountsList = new List<Account>(); 
        
        accountsList.add(new Account(Name='Sample Account 1', NumberOfEmployees=100 ));
        accountsList.add(new Account(Name='Sample Account 2',NumberOfEmployees=200));
        accountsList.add(new Account(Name='Sample Account 3',NumberOfEmployees=400));

        System.debug('accountsList vale are' + accountsList);
        insert accountsList; 
        
        for(Account temp : accountsList){   
            System.debug('Account Names are' + temp.Name);
            System.debug('NumberOfEmployees are' + temp.NumberOfEmployees);
        }
    }
}