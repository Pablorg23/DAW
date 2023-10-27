import java.util.Scanner;
public class U3_AA_Ej19_Pablo {
   
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);

        System.out.print("Introduce un número natural: ");
        int numero = teclado.nextInt();

        int aproximacion = 0;
        int cuadradoAproximado = 0;

        while (cuadradoAproximado <= numero) {
            aproximacion++;
            cuadradoAproximado = aproximacion * aproximacion;
        }

        // El resultado es la aproximación anterior, y el resto es la diferencia entre el número y el cuadrado anterior.
        int resultado = aproximacion - 1;
        int resto = numero - ((resultado) * (resultado));

        System.out.println("La raíz cuadrada de " + numero + " es aproximadamente " + resultado + " con un resto de " + resto);

        teclado.close();
    }
}
