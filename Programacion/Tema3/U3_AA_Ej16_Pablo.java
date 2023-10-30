import java.util.Scanner;
public class U3_AA_Ej16_Pablo {

    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        System.out.print("Introduce un número n: ");
        int n = teclado.nextInt();
        teclado.close();

        for (int i = 1; i <= n; i++) {
            // Imprimir espacios en blanco para alinear los asteriscos
            for (int j = 1; j <= n - i; j++) {
                System.out.print(" ");
            }

            // Imprimir asteriscos
            for (int j = 1; j <= 2 * i - 1; j++) {
                System.out.print("*");
            }

            // Cambiar de línea para la siguiente fila
            System.out.println();
        }
    }
}
