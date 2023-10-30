import java.util.Scanner;

public class U2_AA_Ej16_Pablo {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);

        System.out.print("Introduce un número: ");
        double numero = teclado.nextDouble();

        double valorAbsoluto = (numero >= 0) ? numero : -numero;

        System.out.println("El valor absoluto de " + numero + " es " + valorAbsoluto);


    }
}
