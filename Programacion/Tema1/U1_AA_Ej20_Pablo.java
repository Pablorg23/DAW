import java.util.*;
public class U1_AA_Ej20_Pablo {
    
    public static void main(String[] args){

        Scanner teclado=new Scanner(System.in);
       

        double numero,raizCuadrada;

        System.out.print("Introduce un número real: ");
        numero = teclado.nextDouble();

        raizCuadrada = Math.sqrt(numero);

        System.out.println("La raíz cuadrada de " + numero + " es " + raizCuadrada);

        teclado.close();


    }
}
