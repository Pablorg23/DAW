import java.util.*;
public class U1_AA_Ej17_Pablo {

    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);

        double milimetros,centimetros,metros,sumaEnCentimetros;

        System.out.print("Introduce la distancia en milímetros: ");
        milimetros = teclado.nextDouble();

        System.out.print("Introduce la distancia en centímetros: ");
        centimetros = teclado.nextDouble();

        System.out.print("Introduce la distancia en metros: ");
        metros = teclado.nextDouble();

    
        milimetros /= 10;  
        metros *= 100;     

        sumaEnCentimetros = milimetros + centimetros + metros;

        System.out.println("La suma de las distancias en centímetros es: " + sumaEnCentimetros + " cm");
    }
}
