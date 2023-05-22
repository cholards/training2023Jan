import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter number here: > ");
        int n = scanner.nextInt();

        int counter = 0;
        int sum = 0;

        while (counter < n) {
            counter = counter + 1;
            sum = sum + counter;
        }

        System.out.println(sum);
    }
}