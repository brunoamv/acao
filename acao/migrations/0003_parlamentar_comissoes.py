# -*- coding: utf-8 -*-
# Generated by Django 1.9.1 on 2016-01-30 23:58
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('acao', '0002_comissoes'),
    ]

    operations = [
        migrations.AddField(
            model_name='parlamentar',
            name='comissoes',
            field=models.ManyToManyField(to='acao.Comissoes'),
        ),
    ]
