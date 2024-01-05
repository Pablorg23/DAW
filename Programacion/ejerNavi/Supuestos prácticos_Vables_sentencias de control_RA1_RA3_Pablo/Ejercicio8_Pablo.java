import java.util.Scanner;

public class Ejercicio8_Pablo {

    final static Scanner teclado = new Scanner(System.in);

    public static void main(String[] args) {
        int suma = menu();
        System.out.println("La suma total de los 15 números es "+suma);
    }

    public static int menu() {
        int suma = 0;

        System.out.println("Buenas.");

        for (int i = 1; i <= 15; i++) {
            System.out.print("Introduce el número "+i+":");
            suma += teclado.nextInt();
        }
        return suma;
    }
}
