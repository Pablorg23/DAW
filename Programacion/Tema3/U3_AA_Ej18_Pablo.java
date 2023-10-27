import java.util.Scanner;
public class U3_AA_Ej18_Pablo {

    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);

        System.out.print("Ingrese el primer número: ");
        int num1 = teclado.nextInt();

        System.out.print("Ingrese el segundo número: ");
        int num2 = teclado.nextInt();

        // Encontramos el mayor de los dos números
        int max = Math.max(num1, num2);

        while (true) {
            if (max % num1 == 0 && max % num2 == 0) {
                System.out.println("El mínimo común múltiplo (MCM) de " + num1 + " y " + num2 + " es: " + max);
                break;
            }
            max++;
        }

        teclado.close();
    }
}
