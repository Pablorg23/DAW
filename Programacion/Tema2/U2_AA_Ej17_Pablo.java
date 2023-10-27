import java.util.Scanner;
import java.util.Random;

public class U2_AA_Ej17_Pablo {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        Random generadorAleatorio = new Random();

        // Generamos dos números aleatorios entre 1 y 99.
        int numero1 = generadorAleatorio.nextInt(99) + 1;
        int numero2 = generadorAleatorio.nextInt(99) + 1;

        int sumaEsperada = numero1 + numero2;

        System.out.println("Bienvenido al Juego de la Suma!");
        System.out.println("Por favor, resuelve la siguiente suma:");

        System.out.print(numero1 + " + " + numero2 + " = ");
        int respuestaUsuario = teclado.nextInt();

        if (respuestaUsuario == sumaEsperada) {
            System.out.println("¡Correcto! La respuesta es " + sumaEsperada);
        } else {
            System.out.println("¡Incorrecto! La respuesta correcta es " + sumaEsperada);
        }


    }
}
