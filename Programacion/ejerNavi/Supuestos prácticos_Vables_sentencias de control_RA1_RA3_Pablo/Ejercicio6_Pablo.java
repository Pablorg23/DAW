import java.util.Scanner;

public class Ejercicio6_Pablo {

    final static Scanner teclado = new Scanner(System.in);

    public static void main(String[] args) {

        menu();

    }

    public static void menu() {
        int suma = 0;
        int cantidadNumeros = 0;
        int numero;

        System.out.println("Buenas.");

        do {
            System.out.println("Introduce tantos numeros como quieras e introduce un numero negativo para terminar");
            numero = teclado.nextInt();

            if (numero>= 0) {
                suma += numero;
                cantidadNumeros++;
            }

        } while (numero>= 0);

        if (cantidadNumeros>0) {
            double media=(double)suma/cantidadNumeros;
            System.out.println("La media de los números introducidos es:"+media);
        } else {
            System.out.println("No se introdujeron números válidos para calcular la media.");
        }
    }
}
