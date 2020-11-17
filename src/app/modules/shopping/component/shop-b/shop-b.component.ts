import { Component, OnInit } from '@angular/core';
import {Shop} from 'src/app/shop';

@Component({
  selector: 'app-shop-b',
  templateUrl: './shop-b.component.html',
  styleUrls: ['./shop-b.component.css']
})
export class ShopBComponent implements OnInit {
  shops:Shop[]=[
    {id:1,image:'https://copia.co.ke/wp-content/uploads/2019/09/Neptune-Tissue-2pk_Tissues_4893_1.jpeg',name:'Neptune Tissue',cost:40,quantity:'Pair Pack'},
    {id:2,image:'data:image/jpeg;base64,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',name:'Dettol Soap',cost:130,quantity:'500g'},
    {id:3,image:'data:image/jpeg;base64,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',name:'Lotion',cost:130,quantity:'500ml'},
    {id:4,image:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAwJCRYVExYWFRYYGRcaHhodGh0dHh4eFR4aIR0lIyEdICAmLD0xJio4Kh8gMkkzOD5AREVEJTBMUktCUj1DREEBDQ4OFBEUJhUVJkotLDJFQUdBQUVFSkVFTU1HTkJKQUdHRUFFQUxFQUVNQUVHR0dFTU1DSk1FTk1NQk1FRUFBQv/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAwQCBQYBB//EADwQAAEDAgQDBQUGBQQDAAAAAAEAAhEDIQQSMUFRYXEFIoGRoRMyscHRBhVCUuHwFDNicvEjQ1OSFiSC/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAECBAMFBv/EADMRAAIBAgMGBQMDBAMAAAAAAAABAgMRBCExEkFRYXHwE4GRwdGhseEUMvEiIzNSBUJy/9oADAMBAAIRAxEAPwD6qiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiKrUx1NpguEzFrxyMKL2BaRUB2rSLg2SJ3ItOyvqlOrCorwafQlprUIiLoQEREAREQBERAEREAREQBERAEREAREQBFG+qG6lV3Ys/hHmgLiKkcUeXr9V5/HHgPVAXkUdN+ZoPHxUiAIiIDB7oBPAE+S5RxIk7GF1jmyCFymJJaABqCR52Hw9VnxKvTdiUVcRVJdGmvjJ38F0/Z3aDKrQA4ZwBnbNwY1jguRrVYIPEHxIt9PNGvA7wkRuJB0tf96LzqdaVOrJvTR+rtbgiYpWO+RcPT7XrtNqziOBExHMiSrY+0dWNv+v6rasbR3y78idhnWouR/wDIqm7vJoUTvtC7d1TwgK6xdH/ZFbWOzRcdT7cLvx1B4/qpPvl+zn+YXRV6bV0yyg2ro61FyP32/i/zH0T77fxf5p40OJPhSOuRcg7tl51L/AwovvNx1c//ALH6qPHhxJ8GR2ixzDiFyB7SfoL9b/CJUIxrj7zWHpmGnioeIpreT4Mjtcw4hYmq0auA8QuR9qcuZrWxab5iJ0MHQXje6iNc/wBPlHwhS68FvHgyOx/imfnb5heHFs/MPC65BuLjYeE+uqzbjyL5fU/VV/U0+JPgSOoOObwPoq1XtImzbepWnGKLiBoDt+u6kDRK6xmpK6KODjky2Ksm9ypAVBTkmAJPL1UrVcqSwvcnGb6FeArIYghsQDwJ2UkF3Dfy2/vdTqHDmWAnn8VMoICIiALm+1qIL3s/MJHInfzC6Rabtil3mP4iD4XHxKhq6JOUxTe4wXkG3Qi/lCmwrTlqwbCJ8rR5rzG4eHgjQkeGs+FyVNhmRTqHMO9Hne3VePiION5Pz9Muv8Ew1sVg2S0Dx66nwhYVHSTCsOc1ji4wBcCdzlJj0Wir9oW4ae5O5jXX4cLrzqeHnVScdDXToTnppx3GwKwIVd+Ny0hmPeMXMTu0dSSLDmPFhax9nLjmJLomBoGwSeEl1zw8Fd4Sor8v49yksPPZ2udvv8E0dfNe5jxPmo8K4vzEuJEgNtG0mOlukjipXMVainSey2cakJ024N6GOc8Smc8fUqOo4NBJ0H7sBr0VB+Jrm7aIA/qfld5AH4q9OEqn/a3V2OG3LibQVDx+K8L+JHmtSe1HMs+jVn+luZvg4Oj0UTnYjEAhrfY0zu8TUPQWjwA6la1g5W2qlRRXG9/S2pG3I3gdzCtsJDQ7XiuaoVa9CG1GmpT0DmAlzRzGsfuVvcL2hTeCGPBkaXzeIiR+iinQcU5X2lua7yfI24eWtyyyuRvrYjz19R0JXjSbi/HwWbC38X5gLgiWjqAdJXlF7Q9szEwbaj/AUpM0RneTVtD0A3B1EyOimpU80zsFC+tmc51iHHMCJIvf4rMutYQqtKJ1zZaYyCC0mLTIi+/qrZKhwjQQQQ7bRs+ZkL3Hv9nTMTLjAkQRa5iTxBlb6DUIOT0MVd5kOGxGas+DADS0X1k3W6AAa3mCfoub7LZNSdh6k2/fRdHTbDGnML7akKcFKU4Oct7ZnRmwabyFkWCN/L6lGa+nXl8Fm5o3ZHg79FuRBdoCGBSqOj7rVIoAREQBVsdRz0yNxcdQrKIDi8TEjjHpmUWEpjPGoHx1VrtWjkrOAGsAdDfyVbDEtLpFx8SvFx9VxWzuvr7eeR2hFN3I8TgxUIBMBskAc28JWlxlJtMNptAkkOceW3mQPBpkldBngyb90/Bc0SXuc5wkNlzhqDrDeYgG24adyuGHtN2i2oLPP3tuWpuo5f1T0jn8epV9nlaAQXGAROu2XxMA8gANyBkx1R5YzugZRpaZkyeDQCXTzJ01noUXVX3uJl03knjxFiTyEWJBWOFrhjnOfJJk8ZJOY30GkX2JXoOazXLT1+rafdjTeUdFeUderskl0WvJW3u+1GWmxo3iw35kjmToJuQBMBQUcYXSS0QCAIsSbxY/26zuOq1+Ic97z7SRJBgTOWDltYWMiL3mbyBjVqmIbLWwYcYLi4wCRfXYXPCTEDN+mUrupnJ620XLy0W/LhczeAmknnff6+Tf8343a+JtZt+Bj5E8PnuJ8rPLQeLcw4yQYIAkb7ki5AuTCo4akWG0HQMucrYAMiddXGTE2MwFiZJBLTIhoA0m8gg3uYiBeTI2XRYWlHdx7598WUeFhuV8r9bvhwS42fHSxeDzlBMExmMSBEkDjrEjjI6rLOSQBAs4ncwATqDAFuf117pecrrXDoF5bEDqATYTcwJWVJjgwxeQCSbucdco6mD4A2DVZYane9u+9/wVWGp7Ll75K7y629foXK2KyyRqOAB9ZgToOJMaxM9HGkBpIAMTcACASJME2lp520WsdVJIDQCZ0vMkaxqSSQJ4EAAxbKXj3gLhoaZkCIEjabOvMAmeCvGlGMVFd992O6pwiklz3+/xkrNZsvv7SNR/diAHEgMhtml25vYaz4LMVS4kAxqSeAF584HOY3E6+mHiWjLJzTqIGYk87kAzqYIi5Akw7nPloLRoX7uFoAidoMDfwkS4537775F2krtZWS+u/wDGvKzNxN/Xle9uSsU2ZmulwEHTiY0hVgz3YMyBwnpYASFNJactyZuOEW8N1klZXctDl0L+GP8AqNHGD4DVV+1a8uLhsSB4ABW6VPK55PN19hsPVanF1Za0f1E+YH0WapXk/wChaJ362sjJWaeZJ2XVjP4Hylb6lvYkCeOnMgFc72aDmcOnndb2o1zWQ2A5zbFuaYIm9zP6bL2cH/iS6/dmdaF1hvGkX3EExxE8FO/KRLnHN/cD8FzRq1KjGkPcwutBc0PDQ4ACc4gwCZm2mwW87LAbQAfBeBd2YOlwaAXAyddYk6rWDbUPcb0Uqgwx/wBNvQKdCAiIgCIiA577RMh1MjcOHlH19FqcPVJeZF8voP8AK3n2iAyUifzx5g/RaOjUubRJdrvqRPoYWDEQU9qMnw9iybVmgHERB4XVVmEpsJyCAep1ibbaC3JXDcgARoPNYPbp5ev6r5505U3Knf00e/4yNe1dXKuHwzadm231Jiet9h5AaARE3s1gfnE6zE92TeRuPNWoWNR4a0uOgEnoFVVaik2m79cyblbHMpBs1GtIA7oi8bgcBoqLMQTUaz2YawicrmjSDeNQbannZYvrlz85EiYaBxHyGgPGdCJXtNxE1XgXgN+VrcNosI3t6lPDqlTtPP53Jc3x/NuzpWWaz08+C6b35F+rh2Zs+VubSYGbbfwHkqNXDsLsxY0u4kAnzWWH7S9oTIaWgHvNm50A4XM77FQsxOZxgtyQLxM3tBn9wdIMZ4YatHXdzMdXDzu8tCYMleOYGhzw0AC9ovzPNV3Ysl+VkG4kRsTHvSBx4acFO7GAAXa2b3JFpAnTj5rTQw8oZy1L0sM4u8u934PcPRzXi5FuhsT4gkDkSeBN1lPaD9I/ZVNuLPcawt1JNoaL3O2mUydgOsXadYRK0zRpne+fe7v1PTRFu6JO+8adUyxFtN1mzM6wB5Hb1WRpge8Z+E/NY6mIhHm+RS6RlSwxLMzXA5eRiN44xOiOeJJ1cfeJ1J4lP4jLMcI9P8Km6qsVWrKqlfJcDjKqbJ2KllRxNzlHrPyWrqOlW8LQNRrt4Equ2nKhxdk3z+7M7bkXuzmw+oOfzK3dGjmHKNeBm11qMAyD1HzW6oUw5j+LRPl+yvoMBLaop8397+4asYYbB5Xhxe4iDoWtmeYAPG87q42Yy5nQB+JxJIHOSJXlB2VongD56Dy+KycRBIAieUxwstxVl3CmWDx+KnVfCHu+KsIQEREAREQGq7fw/tMOQPeBBb10+a5ehUuLX267fAjxXT9u45lKic1yYgDUmbBcjSrhxBBBveOIK8vHXh/cg7PeXg03ss2THB3e3kSPEaL2sIqEf1DVVTVDXSbCfmscRi3OqBrAXOa0+0FgCdrmJI4AxcyQQJx4SDxGd3tJ3b3cvX55HWWXQyi+/wAdFr+1auWnEG5EkbAGboa+JdMMpAm3eJGliReXCZ2FiCJlS1nMgCoGFxzQAJgflm9wNePBWxWFdKSra558forK3l5k0p7LXI1uGx1H2YDmZshkAtnnIJsLl2+/WMKrDWcCe6xhJa3QQJixHLlbjcCWpgKOcFoBIBMFx3i8TeZiefUJWwzzH+s7vtNw5wcTkDZEmBaT1giIhc/FhdyhdN73u42te3wdJzTvbf35d870RTqR7rhEGCRcnKNfEG+4vG+LWPPus0M5R+IGRuZIkAXN5tG+zfhXQMz3zlcS6XCIae/EmQM+nFoR2ALrtq1Gg5YEyARIMEk3ESdrnlFv1me70fTr6/xPjSe5a3KGHwlVxMNcJsbt/wDqeBIMHytoLTeyahFwC7ui7tQNIPGY4RfWbW8P2d3O9UqH3tTFjHMkG2sze91Zp4RrbueYGVxLsurAYJMcTPgIhVljJN2TXo/nvrmWVaS+n079tCrV7IcCwSYywTIEAXiOfK3GbzcpUGUwA1otvCwOKptdAe52b2rQfeByAHKIFzaLTw1ULqr3XY3K2Ac1R2TukwXZAC6AYBJAAnqleGIrPYSdulvW774HKVVy1775liriA0EkwAJJ4AXlUqnabXNAbepOUNcC18kgixEgQ4GYXpwzI/8AZe2QB7VmfI1jS0mwbeodBBMankq+V1enSLGOqVGOcXPLctMmAbg92SS0yQDawtC60sAoL+48+C+vaOLux7RwxDWVxnZLS72Y7hD+6Guk6AyTe4AteFdr4UU6j2tAa2Q5oAgAEDYcwSq2IpVIe6o5jnuDgCxxIa5l8hnca6nflO2fWZVqAscHdy5beCDIBiwJDiY5LpXjFUqkIxtstNefbKpK9iXsoQ+DobHxEKJ9HK4jgVZw7YMqTHs7wcNHQV4u3tQ6P7/k7xhZkeE99vD5La4UXyzZ9jyE3+HqtPRd3mraUnQQQJgg+S9z/if8Uv8A0/silTUuPddxj8RA6CAEDi202Hx3svKThxs24kamZj4JSq5STAM6yvXOJsMKe6evL5KwqmB0d1VtCAiIgCiq1A1skxzUq1Pb2J9nSB3kkeAt6kKspKKcnogcr9oMaKlTK2SKdySdXRodeniqGGcGkCMoJmNSBz48+iV6OYl2k8eO/rK8cctpPPhx+Q8l4U6jmpObsn3bvgc03tbRdzAugd6/nfmqlSi32oORxY10ZmtaX1KhIcXEzqCIEAGZAMSFkynUBByOPKD12CuUKdUyBSqwRHuuO8g38uhXXBVPAg1Ztt6ZnbabZo6WHo5oDMQ8AiLtM9wQ0yYAOU2tBkW0W6bh2wGR3W2Enf8AN1MG+typW4GuTalUvxDvWQp2dnV/+J/iPqrzxMpTjtQdld8e/noXausil/DtM91uh0A6fCyzNJpiWgxpIFlcb2biB/tO9Pqsvu+v/wATvJeRUpVW8oy9H6dO7HWNkiKlTaSJA0IHL6aBYBgBAIHduLaEaRwUv3biJtSd6L2r2dinf7JmIN2iVVYes1+1+jDmkVXvAgclBjf5DnA32/uF/SB5hWR2Jiif5R6lzfqpHfZ3FugFrYGgzC03K00cLVi9rYeX38zjKpfJFLEvYHiuKby0BzWQW5He2Mlwm4JJiQCDMQdsRha1YzWAptDKjMmbMXNfYNJEzcDhHBbLD9jYunTbTaxhLc0Eubl9/Mw8SQNrCd1437P4swCGsaDIawgNnMHSSSSTInUL3ZzaV7N8ku/uHP8A1VjWYVlN7g+pArVDUaWkOcBUALAQwEgtGUC43F1LUrvcw+zphsZ2iXFgIcBJNMWBJaYk2BvckLc1+w6pIe1jQ8+8WkXjQnmj+w6+oDZOomL/AAWGrVxKuqdPzt2gop/uZq3UXOe575F4Y05e6C0E6CCSQbyeqnoCD3RpoOl/qr33NiCILR5hZU+xMQHBwyAjiT8l588PiatTblB98Oh2i4RVkzClTD5LD1G8LGs3Mw8W3VsdlVmd4NYXcA6J8CAFRrjEg3ovHQSPO4U/pJQ/dF3fBXX4KSqcDXtqQ4O4ErdMN+PmtN/CVCDDCLzBEeHNbalMDMCDGh47r0f+NjOClGStv+dfI5XuWmgCRfWyzzTHRYsbYjf9+azDYXrogvYA+8OnzV1UMCbnor6hkBERAFyvb7vaVwybMAttJufQjyXVKA4WmXZixpdxIErPiaLrQ2E7Zq/l7knJYbsh9UjKC1u5iAOnHwXR4TsahSgtYC4fiNzPETp4LYoopYWnTbks33pwICIi03AREQBERAEREAREQBERAEREAREQBERAQ1MO13vAdd/NV3dnj8JjqJV5EBrHYN8k2PRRPaWnQhbhYuaDqFIKmBaLnwV1YhoFgIWSgBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAf/Z',name:'Menengai',cost:20,quantity:'100g'},
    {id:5,image:'https://images-na.ssl-images-amazon.com/images/I/71CbNCJZnBL._SL1000_.jpg',name:'Colgate',cost:130,quantity:'300g'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}