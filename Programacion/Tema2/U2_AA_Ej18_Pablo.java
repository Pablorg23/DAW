import java.util.Scanner;
import java.util.Random;

public class U2_AA_Ej18_Pablo {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        Random generadorAleatorio = new Random();

        int numero1 = generadorAleatorio.nextInt(99) + 1;
        int numero2 = generadorAleatorio.nextInt(99) + 1;

        // Generamos un número aleatorio entre 1 y 3 para representar la operación.
        int operacionAleatoria = generadorAleatorio.nextInt(3) + 1;
        String operacion = "";

        int resultadoEsperado = 0;

        switch (operacionAleatoria) {
            case 1:
                operacion = "suma";
                resultadoEsperado = numero1 + numero2;
                break;
            case 2:
                operacion = "resta";
                resultadoEsperado = numero1 - numero2;
                break;
            case 3:
                operacion = "multiplicación";
                resultadoEsperado = numero1 * numero2;
                break;
        }

        System.out.println("Bienvenido al Juego de Operación!");
        System.out.println("Por favor, resuelve la siguiente operación:");

        System.out.print(numero1 + " " + operacion + " " + numero2 + " = ");
        int respuestaUsuario = teclado.nextInt();

        if (respuestaUsuario == resultadoEsperado) {
            System.out.println("¡Correcto! La respuesta es " + resultadoEsperado);
        } else {
            System.out.println("¡Incorrecto! La respuesta correcta es " + resultadoEsperado);
        }


    }
}
