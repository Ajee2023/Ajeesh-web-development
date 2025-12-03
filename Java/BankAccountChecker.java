import java.util.Scanner;

public class BankAccountChecker {
    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        System.out.print("Enter account balance (-1 to stop): ");
        int balance = input.nextInt();

        // Continue until user enters -1
        while (balance != -1) {

            if (balance >= 10000) {
                System.out.println("High balance");
            }
            else if (balance >= 1000 && balance <= 9999) {
                System.out.println("Moderate balance");
            }
            else if (balance >= 0 && balance < 1000) {
                System.out.println("Low balance");
            }
            else {
                System.out.println("Invalid input");
            }

            System.out.print("\nEnter account balance (-1 to stop): ");
            balance = input.nextInt();
        }

        System.out.println("Program ended.");
    }
}
