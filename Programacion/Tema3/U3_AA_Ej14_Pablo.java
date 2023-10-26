   import java.util.Scanner;

public class U3_AA_Ej14_Pablo {

    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);

        System.out.print("Introduce un número n: ");
        int n = teclado.nextInt();
        teclado.close();

        int countPrimos = contarNumerosPrimos(n);
        System.out.println("Hay " + countPrimos + " números primos entre 1 y " + n);
    }

    public static boolean esPrimo(int num) {
        if (num <= 1) {
            return false;
        }
        if (num <= 3) {
            return true;
        }
        if (num % 2 == 0 || num % 3 == 0) {
            return false;
        }

        for (int i = 5; i * i <= num; i += 6) {
            if (num % i == 0 || num % (i + 2) == 0) {
                return false;
            }
        }

        return true;
    }

    public static int contarNumerosPrimos(int n) {
        int count = 0;
        for (int i = 1; i <= n; i++) {
            if (esPrimo(i)) {
                count++;
            }
        }
        return count;
    }
}
