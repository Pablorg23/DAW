import java.util.Scanner;

public class Ejercicio5_Pablo {

    final static Scanner teclado = new Scanner(System.in);

    public static void main(String[] args) {

        menu();

    }

    public static void menu() {
        int suma = 0;
        int numero;

        System.out.println("Buenas.");

        do {
            
            System.out.println("Introduce tantos numeros como quieras e introduce el 0 para terminar");
            numero = teclado.nextInt();

            if (numero!=0) {
                suma += numero;
            }

        } while (numero!=0);

        System.out.println("La suma de los números introducidos es de " + suma);
    }
}
