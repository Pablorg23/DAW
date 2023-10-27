  import java.util.*;

public class U1_AA_Ej22_Pablo {

    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);

        int longitudCentimetros;
        double longitudMetros;

        System.out.print("Introduce la longitud del lanzamiento en metros: ");
        longitudMetros = teclado.nextDouble();

        longitudCentimetros = (int) (longitudMetros * 100);

        System.out.println("La longitud en centímetros es: " + longitudCentimetros + " cm");

        teclado.close();


    }
}
