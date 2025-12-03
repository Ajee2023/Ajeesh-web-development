import java.util.Scanner;

public class SecretWordVerification {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        String word1;
        String word2;

        do {
            System.out.print("Enter the secret word: ");
            word1 = input.nextLine().trim();

            System.out.print("Re-enter the secret word: ");
            word2 = input.nextLine().trim();

            if (word1.isEmpty() || word2.isEmpty()) {
                System.out.println("Invalid entry. Words cannot be empty. Please try again.\n");
            } 
            else if (!word1.equals(word2)) {
                System.out.println("Words do not match. Please try again.\n");
            }

        } while (!word1.equals(word2) || word1.isEmpty());

        System.out.println("Secret word confirmed.");
    }
}
