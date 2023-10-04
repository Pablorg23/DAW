import java.util.*;
public class T1_ejercicioFinales16_Pablo {

    public static void main(String[]args){


        Scanner teclado= new Scanner(System.in);


        int segundos,segundos2,minutos,horas,aux;

        System.out.println("Introduce la cantidad de segundos");
        segundos=teclado.nextInt();

        segundos2=segundos;
        horas=segundos%3600;
        aux=segundos-(horas*3600);
        segundos=segundos-aux;
        minutos=segundos%60;
        aux=segundos-(minutos*60);
        segundos=segundos-aux;

        System.out.println("En "+segundos2+" hay un total de "+horas+" horas, "+minutos+" minutos"+segundos+" segundos");
    }

}
