   import java.util.Scanner;

public class U3_AA_Ej14_Pablo {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);

        System.out.print("Introduce un número entero positivo n: ");
        int n = teclado.nextInt();

        int countPrimos = 0; // Inicializamos el contador de números primos

        for (int i = 2; i <= n; i++) {
            if (esPrimo(i)) {
                countPrimos++;
            }
        }

        System.out.println("Hay " + countPrimos + " números primos entre 1 y " + n);

        teclado.close();
    }

    // Método para comprobar si un número es primo
    public static boolean esPrimo(int numero) {
        if (numero <= 1) {
            return false;
        }
        for (int i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i == 0) {
                return false;
            }
        }
        return true;
    }
}
