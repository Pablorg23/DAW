import java.util.*;
public class U2_AR_Ej4_Pablo {
    
    public static void main(String[]args){

        Scanner teclado=new Scanner(System.in);
        int numero1,numero2;
        boolean aux=false;

        System.out.println("Introduce un numero entero");        
        numero1=teclado.nextInt();

        System.out.println("Introduce un numero entero");
        numero2=teclado.nextInt();

        if(numero1%numero2==0){
            aux=true;

            System.out.println(aux);

        }else{
            System.out.println(aux);
        }
    }
}
