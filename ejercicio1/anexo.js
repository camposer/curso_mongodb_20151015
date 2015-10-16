> db.inventario.find({ cantidad: { $gt: 40 } }, { cantidad: 1 }).sort({ cantidad: 1 });
{ "_id" : ObjectId("5620ceb9f2ba5409e8b6e21a"), "cantidad" : 44 }
{ "_id" : ObjectId("5620ceb9f2ba5409e8b6e216"), "cantidad" : 45 }
{ "_id" : ObjectId("5620ceb9f2ba5409e8b6e21b"), "cantidad" : 45 }
{ "_id" : ObjectId("5620ceb9f2ba5409e8b6e219"), "cantidad" : 90 }
> db.inventario.find({ cantidad: { $gt: 40 } }, { cantidad: 1 }).sort({ cantidad: -1 });
{ "_id" : ObjectId("5620ceb9f2ba5409e8b6e219"), "cantidad" : 90 }
{ "_id" : ObjectId("5620ceb9f2ba5409e8b6e216"), "cantidad" : 45 }
{ "_id" : ObjectId("5620ceb9f2ba5409e8b6e21b"), "cantidad" : 45 }
{ "_id" : ObjectId("5620ceb9f2ba5409e8b6e21a"), "cantidad" : 44 }
> var cursor = db.inventario.find({ cantidad: { $gt: 40 } }, { cantidad: 1 }).sort({ cantidad: -1 });
> while (cursor.hasNext()) print("cantidad = " + cursor.next().cantidad);
cantidad = 90
cantidad = 45
cantidad = 45
cantidad = 44
> var cursor = db.inventario.find({ cantidad: { $gt: 40 } }).sort({ cantidad: -1 });
> while (cursor.hasNext()) {
... var lugares = cursor.next().lugar;
... for (var i in lugares) print("lugar = " + lugares[i].nombre);
... }
lugar = Deposito 2
lugar = Deposito 1
lugar = Deposito 3
lugar = Deposito 3
lugar = Deposito 1
lugar = Deposito 2
> var cursor = db.inventario.find({ cantidad: { $gt: 40 } }).sort({ cantidad: -1 });
> > while (cursor.hasNext()) {
... ... var lugares = cursor.next().lugar;
... ... for (var i in lugares) print("lugar = " + lugares[i].nombre);
... ... }

