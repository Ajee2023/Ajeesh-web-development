import java.util.Scanner;

public class CoffeeShopSizes {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        int totalCost = 0;

        // For loop for exactly 4 drink orders
        for (int i = 1; i <= 4; i++) {

            System.out.print("Enter drink size (small, medium, large): ");
            String size = input.nextLine().toLowerCase().trim();  // handles caps + spaces

            if (size.equals("small")) {
                System.out.println("$2");
                totalCost += 2;
            } else if (size.equals("medium")) {
                System.out.println("$3");
                totalCost += 3;

            } else if (size.equals("large")) {
                System.out.println("$4");
                totalCost += 4;

            } else {
                System.out.println("Invalid size");
                // cost does NOT increase for invalid size
            }
        }

        System.out.println("Total cost before tax: $" + totalCost);
    }
}
